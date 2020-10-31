using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { set; get; }

        public DbSet<User> Users { set; get; }

        public DbSet<Photo> Photos { get; set; }
    }
}