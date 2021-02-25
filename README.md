## 🚀 Quick start

1. Install [VSCode](https://code.visualstudio.com/)
1. Install [Node](https://nodejs.org/en/download/)
1. Install [Git](https://git-scm.com/)
1. [Create a GitHub user](https://github.com/join)
1. Open VSCode
1. Clone the repository
1. Install yarn global

   ```console
   npm install --global yarn
   ```

1. Install extensions:
   1. Go to extension:
      ![extensions](image/Extension.PNG)
   1. Type in:
      ```console
      @recommended
      ```
   1. Install all recommended(see picture)
      ![recommended ](image/Install-extensions.PNG)
1. Enable format on save and prettier
   1. Click:
      ```console
      ctrl+,
      ```
   1. Search for
      ```console
      format on save
      ```
   1. Squat off "Format On Save"
      ```console
      format on save
      ```
   1. Search for
      ```console
      defaultFormatter
      ```
   1. select
      ```console
      esbenp.prettier-vscode
      ```
1. Install Packages
   ```console
   yarn add
   ```
1. Start server
   ```console
   yarn dev
   ```
1. Generate schema
   ```console
   yarn prisma generate
   ```
1. Update database
   ```console
   yarn prisma migrate dev --preview-feature
   ```

## 🗃️ Database

### Prisma studio

Prisma Studio is a visual editor for your database.
Open [prisma studio](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-studio) interface:

```
yarn run studio
```

## auth

### Google

Create CLIENT_ID and CLIENT_SECRET to your env [Google](https://console.developers.google.com/apis/credentials)

### Facebook

Create CLIENT_ID and CLIENT_SECRET to your env [Facebook](https://developers.facebook.com/async/registration/)

### Github

Create CLIENT_ID and CLIENT_SECRET to your env [Github](https://github.com/settings/apps)

### Github

Config env [Email](https://next-auth.js.org/providers/email)

### Frontend - http://localhost:3000

### Backend - http://localhost:3000/api/graphql

## 📃 Documentation

1. [Fullstack Apollo Next.js and Nexus Schema](https://www.youtube.com/watch?v=y34ym0-KZ8A)
