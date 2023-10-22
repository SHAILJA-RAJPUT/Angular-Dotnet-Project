using CODEPULSE_API.DATA;
using CODEPULSE_API.Models.Domain;
using CODEPULSE_API.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace CODEPULSE_API.Repository.Implementation
{
    public class CategoryRepository:ICategoryRepository
    {
        private readonly ApplicationDbContext dbContext;

        public CategoryRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public  async Task<Category> CreateAsync(Category category)
        {
            await dbContext.Categories.AddAsync(category);// add category in the databse
            await dbContext.SaveChangesAsync();

            return category;
        }

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
          return  await dbContext.Categories.ToListAsync();   
        }

        public async Task<Category?> GetById(Guid Id)
        {
         return  await dbContext .Categories.FirstOrDefaultAsync(c => c.Id == Id);
        }
    }
}
