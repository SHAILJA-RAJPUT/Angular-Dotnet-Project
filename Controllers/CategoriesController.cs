using CODEPULSE_API.Models.Domain;
using CODEPULSE_API.Models.DTO;
using CODEPULSE_API.Repository.Interface;
using Microsoft.AspNetCore.Mvc;




namespace CODEPULSE_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoriesController(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryRequestDto request)
        {
            var category = new Category
            {
                Name = request.Name,
                UrlHandle = request.UrlHandle

            };

            await categoryRepository.CreateAsync(category);
            var response = new CategoryDto
            {
                Id = category.Id,
                Name = category.Name,
                UrlHandle = category.UrlHandle
            };
            return Ok(response);
        }

        // GET :https://localhost:7197/api/Categories
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await categoryRepository.GetAllAsync();

            var response= new List<CategoryDto>();
            foreach (var item in categories)
            {
                response.Add(new CategoryDto
                {
                    Id= item.Id,
                    Name = item.Name,
                    UrlHandle = item.UrlHandle
                });
            }

            return Ok(response);
        }


        // GET:https://localhost:7197/api/Categories/{id}
        [HttpGet]
        [Route("{Id:Guid}")]
        public async Task<IActionResult> GetCategoryId([FromRoute] Guid Id)
        {
         var existingCategory=   await categoryRepository.GetById(Id);

            if(existingCategory is null)
            {
                return NotFound();
            }
            var response = new CategoryDto
            {
                Id = existingCategory.Id,
                Name = existingCategory.Name,
                UrlHandle = existingCategory.UrlHandle
            };
            return Ok(response);
        }
    }


}

