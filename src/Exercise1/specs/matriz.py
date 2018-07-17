array=[['I',0,0,1,'S'],[1,0,1,1,0],[1,0,0,1,0],[0,0,1,0,0],[1,0,0,0,0]]
#print array

#print array[0]
for i in range(len(array)):
    print array[i]
#to start
array[0][0]=0
array[0][4]=0
print
for i in range(len(array)):
    print array[i]

#compare
aux1=0
a=False

while a!=True:
    for i in range(len(array)):
        if array[0][i]==1:
            #print array[0][i]
            aux1=i
            a=True

for i in range(2):
    for j in range(aux1):
        #print (i,j,array[i][j])
        if array[0][j]==0 and array[1][j]==0:
            array[0][j]='x'
print
for i in range(len(array)):
    print array[i]
a=False

while a!=True:
    for i in range(len(array)):
        if array[1][i]==1:
            #print array[0][i]
            aux1=i
            a=True

for i in range(2):
    for j in range(aux1):
        #print (i,j,array[i][j])
        if array[1][j]==0 and array[2][j]==0:
            array[1][j]='x'
print
for i in range(len(array)):
    print array[i]
a=False

while a!=True:
    for i in range(len(array)):
        if array[2][i]==1:
            #print array[0][i]
            aux1=i
            a=True

for i in range(2):
    for j in range(aux1):
        #print (i,j,array[i][j])
        if array[2][j]==0 and array[3][j]==0:
            array[2][j]='x'
print
for i in range(len(array)):
    print array[i]
a=False

while a!=True:
    for i in range(len(array)):
        if array[3][i]==1:
            #print array[0][i]
            aux1=i
            a=True

for i in range(2):
    for j in range(aux1):
        #print (i,j,array[i][j])
        if array[3][j]==0 and array[4][j]==0:
            array[3][j]='x'
print
for i in range(len(array)):
    print array[i]
a=False
