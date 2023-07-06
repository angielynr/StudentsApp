﻿

using System.ComponentModel.DataAnnotations;

namespace StudentsApp.Services.ServicesDTO
{
    public class StudentRequestDTO
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Age { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
    }
}
