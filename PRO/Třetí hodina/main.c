#include <stdio.h>

int main() {
    int cislo;

    printf("Zadej cislo: ");
    scanf("%d", &cislo);
    printf("Tvoje cyslo je: %d\n", cislo);
    int den, mesic, rok;
    printf("Zadej den, mesic, rok: ");
    scanf("%d %d %d", &den, &mesic, &rok);
    printf("Tvoje datum je: %02d.%02d.%02d\n", den, mesic, rok);
    return 0;
}