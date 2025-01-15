import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // Fetch session and user details using KindeAuth
      const { isAuthenticated, getUser } = getKindeServerSession()
      const isUserAuthenticated = await isAuthenticated()

      // If the user is not authenticated, throw an error
      if (!isUserAuthenticated) {
        throw new UploadThingError('Unauthorized')
      }

      const user = await getUser()

      // Ensure user details are valid
      if (!user || !user.id) {
        throw new UploadThingError('Unauthorized')
      }

      // Return userId as metadata for further processing
      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log(`File uploaded by user ${metadata.userId}:`, file)

      // Optional: Handle additional logic like saving file metadata to a database

      // Return metadata to the client
      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
