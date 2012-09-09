# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Video.delete_all

Video.create(brand: "Hello Whaley", description: "a great film cronicling the coming of age story of a man who swims acroos the ocean to be with a chick.  Then he meets a whale and rides that whale to prosperity and happiness.  The end of the world as we know it, where whale and man get more than just oily.", director: "Cameron Crowe", project: "North shore Jamz", type_of: "film", url: "http://s3.amazonaws.com/wibble-assets/videos/ocean_medium.mp4")