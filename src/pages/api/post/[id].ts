import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

// DELETE /api/post/:id
const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.id
  if (req.method === 'DELETE' && typeof postId == 'string') {
    const post = await prisma.post.delete({
      where: { id: postId },
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}

export default deletePost