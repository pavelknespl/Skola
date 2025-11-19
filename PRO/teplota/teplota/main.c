#include <stdio.h>
int teplota;
int main() {
    printf("Zadej teplotu: ");
    scanf("%d", &teplota);
    if (teplota < 0) {
        printf("Fryzing wedr");
    } else if (teplota > 0 && teplota < 11) {
        printf("Veri colt wedr");
    } else if (teplota > 10 && teplota < 20) {
        printf("Colt wedr");
    } else if (teplota > 20 && teplota < 30) {
        printf("Norml");
    } else if (teplota > 30 && teplota < 40) {
        printf("Hot");
    } else if (teplota >= 40){
        printf("Veri hot");
    } else {
        printf("Nejak to nefacha");a
    }
    return 0;
}