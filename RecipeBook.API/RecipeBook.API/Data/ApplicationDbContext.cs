using Microsoft.EntityFrameworkCore;
using RecipeBook.API.Models;

namespace RecipeBook.API.Data
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

		public DbSet<Recipe> Recipes { get; set; }
	}
}
