using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.StaticFiles; // ADD THIS USING STATEMENT

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// ----------------------------------------------------
// THE NEW, SINGLE-LINE FILE SERVER CONFIGURATION
// ----------------------------------------------------

// UseFileServer combines StaticFiles, DefaultFiles, and DirectoryBrowsing.
// We explicitly configure it to use the ContentRootPath and look for index.html.
app.UseFileServer(new FileServerOptions
{
    FileProvider = new PhysicalFileProvider(
        builder.Environment.ContentRootPath),

    RequestPath = "", // Map the root of the project to the root URL (/)

    EnableDefaultFiles = true,
    DefaultFilesOptions = {
        DefaultFileNames = { "index.html" } // Explicitly look for index.html
    }
});

// ----------------------------------------------------

app.Run();