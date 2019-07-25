using Microsoft.EntityFrameworkCore;
using TTN.API.Models;

namespace TTN.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}
        public DbSet<Employee> Employees { get; set; }
        
    }
}