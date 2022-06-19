using Delivery.Entity.Model.Classes;
using Microsoft.EntityFrameworkCore;
using System;

namespace Delivery.Entity
{
    public class DeliveryContext : DbContext
    {
        public DeliveryContext(DbContextOptions<DeliveryContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

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
