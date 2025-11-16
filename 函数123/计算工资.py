a =int(input())
if a>120:
    print((a-120)*80*1.15+120*80)
elif a<60:
    print(a*80-700)
else:
    print(a*80)