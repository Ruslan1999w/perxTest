import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
    schema: {
        collections: [
            {
                name: "post",
                label: "Посты",
                path: "content/posts",
                format: "md",
                defaultTemplate: "default",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Заголовок",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Дата публикации",
                        ui: {
                            dateFormat: "YYYY-MM-DD",
                            timeFormat: "HH:mm",
                        },
                    },
                    {
                        type: "string",
                        name: "author_name",
                        label: "Имя автора",
                    },
                    {
                        type: "image",
                        name: "author_image",
                        label: "Фото автора",
                    },
                    {
                        type: "image",
                        name: "media",
                        label: "Медиа (изображение или видео)",
                    },
                    {
                        type: "image",
                        name: "media_poster",
                        label: "Превью для видео (poster)",
                    },
                    {
                        type: "string",
                        name: "comments",
                        label: "Количество комментариев",
                        description: "Введите число, например: 12",
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Описание",
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Теги",
                        list: true,
                        ui: {
                            component: "tags",
                        },
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Основной текст",
                        isBody: true,
                        templates: [
                            {
                                name: "Callout",
                                label: "Выноска",
                                fields: [
                                    {
                                        type: "string",
                                        name: "text",
                                        label: "Текст",
                                        isBody: true,
                                    },
                                ],
                                inline: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
