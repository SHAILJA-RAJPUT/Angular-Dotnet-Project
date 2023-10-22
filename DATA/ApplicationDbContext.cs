using CODEPULSE_API.Models.Domain;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CODEPULSE_API.DATA
{
    public class ApplicationDbContext : DbContext
    {
       

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        { }

        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
