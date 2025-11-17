# def add(a,b):
# #     return a+b
# # print(add(1,2))
# # def fd(a,b):
# #     return a-b
# # print(fd(1,2))
# #
# # def add(a,b):
# #     return a+b
# # print(add(2,4))
# 写一个幂函数
def pow(n,k):
    if k==0:
        return 1
    else:
        return n*pow(n,k-1)
n=int(input("n"))
k=int(input("k"))
print(pow(n,k))