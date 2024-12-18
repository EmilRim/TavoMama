#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "head.h"

int main()
{
    char title[255];
    printf("maine\n");
    FILE* file = openFile("test.html");
    headComponents(file);
    fprintf(file, "\n  </head>");
    printf("kokio title nori?\n");
    fscanf(stdin, "%255[^\n]", &title);
    body(file, title);

    fprintf(file, "\n</main>\n</body>");
    fprintf(file, "\n</html>");
    //kintamieji

    //main'o programa
    
    return 0;
}
