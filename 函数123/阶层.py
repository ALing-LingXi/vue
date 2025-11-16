sum=1
add =0
for i in range(1,7):
    for j in range(1,i+1):
        sum *=j
    add +=sum
    sum=1
print(add)