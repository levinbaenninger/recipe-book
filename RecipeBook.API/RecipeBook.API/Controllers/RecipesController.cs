using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeBook.API.Data;
using RecipeBook.API.Models;

namespace RecipeBook.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RecipesController : ControllerBase
	{
		private readonly ApplicationDbContext _db;

		public RecipesController(ApplicationDbContext db)
		{
			_db = db;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
		{
			return Ok(await _db.Recipes.ToListAsync());
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Recipe>> GetRecipe(int id)
		{
			var recipe = await _db.Recipes.FindAsync(id);

			if (recipe == null)
			{
				return NotFound();
			}

			return Ok(recipe);
		}

		[HttpPost]
		public async Task<ActionResult<Recipe>> CreateRecipe(Recipe recipe)
		{
			_db.Recipes.Add(recipe);
			await _db.SaveChangesAsync();

			return CreatedAtAction(nameof(GetRecipe), new { id = recipe.Id }, recipe);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> UpdateRecipe(int id, Recipe recipe)
		{
			if (id != recipe.Id)
			{
				return BadRequest();
			}

			_db.Entry(recipe).State = EntityState.Modified;

			try
			{
				await _db.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!RecipeExists(id))
				{
					return NotFound();
				}
				
				throw;
			}

			return NoContent();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteRecipe(int id)
		{
			var recipe = await _db.Recipes.FindAsync(id);

			if (recipe == null)
			{
				return NotFound();
			}

			_db.Recipes.Remove(recipe);
			await _db.SaveChangesAsync();

			return NoContent();
		}

		private bool RecipeExists(int id)
		{
			return _db.Recipes.Any(e => e.Id == id);
		}
	}
}
