using Delivery.Model.Classes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.DAL
{
    public class DeliveryContext : DbContext
    {
        public DeliveryContext(DbContextOptions<DeliveryContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            // Configure StudentId as FK for StudentAddress
            modelBuilder.Entity<User>()
               .HasOne(a => a.Address)
               .WithOne(b => b.User)
               .HasForeignKey<User>(b => b.ID);

            modelBuilder.Entity<Order>()
                .HasOne(a => a.Address)
                .WithOne(b => b.Order)
                .HasForeignKey<Order>(b => b.ID);

        }
    }
}
