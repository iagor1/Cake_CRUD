# cake_crud
- A crud made with sql server, angular and c#, to run this project you need : 
- Angular CLI: 14.2.5
- Node: 16.13.0
- Package Manager: npm 8.1.0
- .net 6
- sql server
# How to Run
```sh
git clone https://github.com/iagor1/cake_crud
```
### Frontend
- ```sh
npm install
```
- ng serve -o
### Backend 
- install Microsoft.EntityFrameworkCore package 
- install Microsoft.EntityFrameworkCore.SqlServer package
- install Microsoft.EntityFrameworkCore.Tools package
- install Microsoft.VisualStudio.Web.CodeGeneration.Design package
### Database
- to create a database from the code we are going to use EntityFramework, first you need add the connection string in the appsettings.json
```sh
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=master;Trusted_Connection=True;"
  },
```
- then you need to open your package manager on the visual studio and run this code 
```sh
dotnet ef -v migrations add InicialCreate --context YourContext
```
- And then create the database : 

```sh
dotnet ef -v database update --context YourContext
```
*YourContext its a fake name, this name is the same on your Class Context*
- After this steps you can run properly :)
