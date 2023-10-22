using CODEPULSE_API.Models.Domain;

namespace CODEPULSE_API.Repository.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
        Task< IEnumerable<Category>> GetAllAsync();
        Task<Category?> GetById(Guid Id);

    }
}
