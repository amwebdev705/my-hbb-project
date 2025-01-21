'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCartStore from '@/hooks/use-cart-store';
import { useToast } from '@/hooks/use-toast';
import { OrderItem } from '@/types';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/stores/product-store';

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem;
  minimal?: boolean;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const { addItem } = useCartStore();

  const { setQuantity, getQuantity } = useProductStore();
  const t = useTranslations();

  const stockCount = item.countInStock || 0;
  const quantity = getQuantity(item.product);

  const handleAddToCart = async () => {
    if (quantity > stockCount) {
      toast({
        variant: 'destructive',
        description: t('Product.OutOfStockMessage', { available: stockCount }),
      });
      return;
    }

    try {
      await addItem(item, quantity);
      toast({
        description: t('Product.AddedToCart'),
        action: (
          <Button
            onClick={() => {
              router.push('/cart');
            }}
          >
            {t('Product.GoToCart')}
          </Button>
        ),
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          description: error.message,
        });
      } else {
        console.error('Unknown error occurred:', error);
      }
    }
  };

  return minimal ? (
    <Button
      className="rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all w-full"
      onClick={handleAddToCart}
    >
      {t('Product.AddToCart')}
    </Button>
  ) : (
    <div className="w-full space-y-2">
      <Select
        value={quantity.toString()}
        onValueChange={(value) => setQuantity(item.product, Number(value))}
      >
        <SelectTrigger>
          <SelectValue>
            {t('Product.Quantity')}: {quantity}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: stockCount }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button className="rounded-full w-full" onClick={handleAddToCart}>
        {t('Product.AddToCart')}
      </Button>
    </div>
  );
}
