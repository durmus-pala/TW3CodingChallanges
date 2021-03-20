my_string = input("Please write your sentence to reverse it: ")
result = ''
def string_reverser(n):
    result = n[::-1]
    return result;
print("Reversed version of this sentence is", string_reverser(my_string))