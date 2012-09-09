# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Video.delete_all

Video.create(brand: "Hello Kity", description: "a movie of the history of FTP file transfer and how nobody fuckin gives a shit", director: "Cameron Crowe", project: "North shore Jamz", type_of: "documentary", url: "http://s3.amazonaws.com/wibble-assets/videos/ocean_medium.mp4")