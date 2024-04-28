# Recipe Book

This is a recipe book application built with Angular for the frontend and ASP.NET Core Web API for the backend. The application is currently in development and has not been deployed yet.

## Features

- **Recipe Browsing**: Users can browse through a list of recipes.
- **Recipe Details**: Users can view detailed information about a specific recipe.
- **Recipe Creation**: Users can create new recipes and add them to the recipe book.
- **Recipe Update**: Users can update the details of existing recipes.
- **Recipe Deletion**: Users can delete recipes from the recipe book.
- **Shopping List**: Users can add the indgredients from their favourite recipe directly in the integrated shopping list (in progress)

## Technologies Used

- **Frontend**: Angular
- **Backend**: ASP.NET Core Web API
- **Database**: Entity Framework Core with SQL Server

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository.
2. Install the .NET Core SDK and Node.js if you haven't already.
3. Navigate to the `RecipeBook.API` directory and run `dotnet restore` to restore the backend dependencies.
4. In the appsettings.json replace the connection string with your own.
5. Navigate to the `RecipeBook.UI` directory and run `npm install` to install the frontend dependencies.
6. Run `dotnet run` in the `RecipeBook.API` directory to start the backend server.
7. Run `ng serve` in the `RecipeBook.UI` directory to start the frontend server.
8. Open your browser and navigate to `http://localhost:4200` to view the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Levin Bänninger - <l.baenninger@icloud.com>

Project Link: [https://github.com/baenningerlevin/recipe-book](https://github.com/baenningerlevin/recipe-book)

## Acknowledgements

- [Angular](https://angular.dev/)
- [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
