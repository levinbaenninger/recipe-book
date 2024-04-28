namespace RecipeBook.API.Models
{
	public class Recipe
	{

		public int Id { get; set; }
		public string Name { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;
		public string ImagePath { get; set; } = string.Empty;
	}
}