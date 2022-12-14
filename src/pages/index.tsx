import React from "react"
import { Layout } from "@/components/Layout"
import { Post, PostProps } from "@/components/Post"
import prisma from '@/lib/prisma'
import { GetServerSideProps, NextPage } from "next"
import { Stack, Typography } from "@mui/material"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const feed = await prisma.post.findMany({
    where: { published: true },
  })
  return {
    props: { feed },
  }
}

type Props = {
  feed: PostProps[]
}

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout>
      {props.feed.length == 0 &&
        <Typography variant={"h4"}>記事が存在しません。</Typography>
      }
      <Stack spacing={2}>
        {props.feed.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
    </Layout>
  )
}

export default Blog
