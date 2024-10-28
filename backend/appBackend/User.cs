using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.HttpResults;
using System.ComponentModel.DataAnnotations;


public static class User
{
    public static void MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/users", GetAllUsers)
           .WithName("GetAllUsers")
           .WithOpenApi();
    }

    public static async Task<Results<Ok<List<SystemUser>>, NotFound>> GetAllUsers(AppDbContext db)
    {
        var users = await db.user.ToListAsync();
        return users.Count > 0 ? TypedResults.Ok(users) : TypedResults.NotFound();
    }
}

public class SystemUser
{
    // [Key]
    public int userid { get; set; }
    public required string name { get; set; }
    public int age { get; set; }
    public required string usertype { get; set; }

}

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<SystemUser> user { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<SystemUser>()
            .HasKey(u => u.userid);
    }
}
