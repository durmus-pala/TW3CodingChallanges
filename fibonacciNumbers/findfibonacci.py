def fibo(n):
    a = 0
    b = 1
    for i in range(1, n + 1):
        a, b = b , a + b
    return b
number = int(input("Please Enter Your number to find fibonacci in this order: "))
print("The fibonacci number in this order is", fibo(number))
