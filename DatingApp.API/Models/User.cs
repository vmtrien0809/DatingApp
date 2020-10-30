namespace DatingApp.API.Models
{
    public class User
    {
        public int Id { set; get; }

        public string Name { set; get; }

        public byte[] PasswordHash { set; get; }

        public byte[] PasswordSalt { set; get; }
        public string Username { get; internal set; }
    }
}