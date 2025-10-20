#include <stdio.h>

int pocet = 0;
float mezisoucet = 0;
float sleva = 0;
float cena = 0;
float vysledek = 0;
float zaplaceno = 0;
float vraceni = 0;

int main() {
    printf("Zadej pocet polozek: ");
    scanf("%d", &pocet);

    for(int n = 1; pocet >= n; n++){
        printf("Zadej cenu polozky %d: ", n);
        scanf("%f", &cena);
        mezisoucet += cena;
    }
    if (mezisoucet > 1000){
        sleva = mezisoucet / 10;
        vysledek = mezisoucet - (mezisoucet / 10);
    } else {
        vysledek = mezisoucet;
    }
    printf("----------------------------\n");
    printf("Pocet polozek: %d\n", pocet);
    printf("Mezisoucet: %.00f", mezisoucet);
    printf(" Kc\n");
    printf("Sleva: %.00f", sleva);
    printf(" Kc\n");
    printf("K uhrade %.00f", vysledek);
    printf(" Kc\n");
    printf("----------------------------\n");
    while(1){   
     printf("Zaplat: ");
     scanf("%f", &zaplaceno); 
    if (zaplaceno >= vysledek){
         vraceni = zaplaceno - vysledek;
         printf("Vracim ti %.00f", vraceni);
         printf(" Kc\n");
         printf("Dzenkujeme za vas nakchup v ziabce!");
         break;
    } 
        else{
        printf("Nezaplatil jsi dost!\n");
    }}

}