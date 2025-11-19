#include <stdio.h>
int pocet;
int main() {
    printf("Zadej vysku: ");
    scanf("%d", &pocet);
    for(int n = 1; pocet >= n; n++){
        printf("\n");
        for (int k = pocet; k > 0; k--){
        printf(" ");
        }
        for (int i = 0; i < n; i++){
        printf("%d", n);
        }
    }
    return 0;
}