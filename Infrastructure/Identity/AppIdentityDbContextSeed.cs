using Core.Entites.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Ahmed",
                    Email = "ahmed.m.abdelrahman0@gmail.com",
                    UserName = "AhmedMohamed",
                    Address = new Address
                    {
                        FirstName = "Ahmed",
                        LastName = "Abdelrahman",
                        Street = "10 the Street",
                        City = "Cairo",
                        State = "15 may",
                        ZipCode = "99999"
                    }
                };
                await userManager.CreateAsync(user,"A@hmed2022");
            }
        }
    }
}
