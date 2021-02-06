# X-Boilerplate

This is a boilerplate created using [X-Framework](https://www.kaviarjs.com/docs/x-framework-introduction) powered by [Kaviar](https://kaviarjs.com).

It's a good idea to understand the [foundation principles](https://www.kaviarjs.com/docs/package-core) first. But feel free to hack away and enjoy!

You can already start playing with x for the Command-Line by installing `npm i -g @kaviar/x`. [View the options here](https://www.kaviarjs.com/docs/package-x-generator-bundle)

## Requirements:

- MongoDB 4+ installed
- Node 14+ installed
- Typescript 4+ installed

## Features

- Post/Comment/Tag/User relationships modeling a blog
- CRUD interfaces for Post
- Relational data capability ready
- Authentication & Authorisation
- Fixtures to start testing your data in a second.

# Start

## Backend API

```bash
cd microservices/api
cp .env.example .env
npm install
npm run start:watch
```

After it starts go to GraphQL Playground: http://localhost:4000/graphql

You can try your first query in it:

```graphql
query {
  postsFind(query: {}) {
    _id
    title
    comments {
      user {
        profile {
          firstName
        }
      }
    }
  }
}
```

You can start hacking and adding [new stuff fast](https://www.kaviarjs.com/docs/package-x-generator-bundle) with:

```bash
cd microservices/api
x
```

## Frontend API

```bash
cd microservices/ui
npm install
npm start
```

When it starts it will open an endpoint on http://localhost:3000 automatically connected with http://localhost:4000/graphql

# TODO

- UI Full Authentication Built
- Admin interface with ANTD
- Sample CRUD (filters, pagination, forms)
- Live Data Example
