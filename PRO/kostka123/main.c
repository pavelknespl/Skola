#include <stdio.h>
int rozmer;
int cislo = 1;
int main() {
    printf("Zadej rozmer: ");
    scanf("%d", &rozmer);
    for(int n = 0; rozmer > n; n++){
        printf("\n");
        for(int n = 0; rozmer > n; n++){
            printf("%d", cislo);
        }
        if (cislo == 3){
            cislo--;
        } else if (cislo >= 0 && cislo < 3) {{
            cislo++;
        }}
    }
    return 0;
}