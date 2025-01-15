import { column, defineTable } from 'astro:db';

export const Likes = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    postUrl: column.text(),
    count: column.number({ default: 0 }),
  }
});
