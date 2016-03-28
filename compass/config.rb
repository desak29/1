# Require any additional compass plugins here.

#Folder settings
relative_assets = true      #because we're not working from the root
css_dir = "../css"          #where the CSS will saved
sass_dir = "sass"           #where our .scss files are
images_dir = "../images"    #the folder with your images

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded # After dev :compressed

# if you change it from expanded to express it will autimatically minify your css
## the default is for development 
### when it comes time to show the website its important to compress or minify your ouput by using the command :compress

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true

# Obviously
preferred_syntax = :scss