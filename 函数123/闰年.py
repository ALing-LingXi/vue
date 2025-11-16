import math
def gcd(a,b):
    return math.gcd(a,b)
num1 = int(input("请输入第一个整数: "))
num2 = int(input("请输入第二个整数: "))
result = gcd(num1,num2)
print(f"{num1} {num2},{result}")
