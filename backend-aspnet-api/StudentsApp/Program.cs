using Microsoft.EntityFrameworkCore;
using StudentsApp.Repository.DataContext;
using StudentsApp.Repository.Interfaces;
using StudentsApp.Repository.Queries;
using StudentsApp.Services.Interfaces;
using StudentsApp.Services.Queries;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.
ConfiguredServices(builder.Services);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

void ConfiguredServices(IServiceCollection services)
{
    services.AddScoped<IStudentServiceQueries, StudentServiceQueries>();
    services.AddScoped<IStudentsRepositoryQueries, StudentRepositoryQueries>();

    services.AddDbContext<AppDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
}
