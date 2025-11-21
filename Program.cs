// Program.cs

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// This ensures the application can serve static files from wwwroot
app.UseStaticFiles();

// This tells the application to look for index.html as the default file when the root URL is hit
app.UseDefaultFiles();

// Remove all routing and server logic
// The app.MapGet(...) or app.Run(...) code is removed.

app.Run();