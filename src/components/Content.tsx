import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { newtClient,Article } from "../lib/newt";

const { items: articles } = await newtClient.getContents<Article>({
  appUid: "blog",
  modelUid: "article",
  query: {
    select: ["title", "slug","body"],
  },
});

export function MyContent() {

  const cards = articles.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href={`/articles/${article.slug}`} className="px-0.5">
      <AspectRatio ratio={1920 / 1080}>
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
      </Text>
      <Text mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container className="w-full" py="xl">
      <SimpleGrid className="w-full grid grid-cols-2" cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
