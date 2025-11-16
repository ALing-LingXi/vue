# def selfDivisor(num):
    # # 把数字变成字符串，一位一位检查
    # for ch in str(num):
    #     digit = int(ch)
    #     # 不能有 0
    #     if digit == 0:
    #         return False
    #     # 每一位都必须整除这个数
    #     if num % digit != 0:
    #         return False
    # return True
def selfDivisor(num):
    for i in str(num):
        if i=="0":
            return False
        if num%int(i)!=0:
            return False
    else:
        return True

N = int(input())

for i in range(1, N + 1):
    if selfDivisor(i):
        print(i, end=" ")
