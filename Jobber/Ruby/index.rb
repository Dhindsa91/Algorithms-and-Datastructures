str_1 = "HelloWorld";
str_2 = "     !     ";
chars = "a,b,c";
$global_var = 999999999;

null = nil;

## String Manipulation 
my_name = 'Arvind';
print("Uppercase, Strip, Length ", str_1.upcase(), " ", str_2.strip(), " ", String(str_1.length()), "\n");
print("Hello My Name #{my_name} \n");
print("String Manipulation ", str_1[0,5], "\n");
print("String Manipulation ", str_1[-5, str_1.length()], "\n");
print("String Manipulation ", str_1[2], "\n");

# HashMap
hashmap = {
    "K" => "Vancouver",
    2 => "Montreal",
    3 => "Toronto"
}
puts(hashmap);

#Arrays
num_array = [91, 23, 33, 200, 1, 3, 4];
fruits_array = Array["Apple", "Oranges", "Banana", "Strawberry"];
print("Printing A Sorted Array With a Prefix ", num_array.sort(), "\n");
num_array.each {|x| print(String(x) + " ")};
puts()
mapped_num_arr = num_array.map {|x|  x * 2};
print("Mapped Array ",mapped_num_arr, "\n");
print("Char Split",chars.split(","),"\n");

# Functions
def myFunction(num_1, num_2)
    return num_1 ** num_2;
end
puts(myFunction(5, 5));

def multipleReturns
    i = 100
    j = 200
    k = 300
 return i, j, k
 end
 mutliple_return_method = multipleReturns();
 print(mutliple_return_method[1], "\n");
 

#Ranges
puts("#{("abc".."abe").to_a}");
puts("#{(1..10).to_a}");

#Classes
class Animal
    @@life = 10;
    def initialize(name, age)
        @name = name;
        @age = age;
    end
end


#Try Catch
begin
    
rescue => exception
    
else
    
ensure
    
end