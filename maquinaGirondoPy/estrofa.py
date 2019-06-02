# -*- coding: utf-8 -*-

import random
from verso import Verso
from tools import Tools

class Estrofa(object):

    def estrofa(self, c):
        t = ''
        theme = random.randint(0, 3)

        enume = 0

        versos = []
        palabras = []
        estru = []

        for i in range(c):
            if i == 0:
                palabras.append(random.randint(1, 7))
                estru.append(random.randint(0, 3))
            else:
                if palabras[i - 1] == 7 and estru[i - 1] == 1:
                    palabras.append(7)
                    estru.append(0)
                elif palabras[i - 1] == 6 and estru[i - 1] == 1:
                    if random.randint(0, 100) > 50:
                        palabras.append(5)
                        estru.append(0)
                    else:
                        palabras.append(3)
                        estru.append(1)
                elif palabras[i - 1] == 6 and estru[i - 1] == 2:
                    if random.randint(0, 100) > 50:
                        palabras.append(5)
                        estru.append(0)
                    else:
                        palabras.append(3)
                        estru.append(1)
                elif palabras[i - 1] == 4 and estru[i - 1] == 2:
                    palabras.append(7)
                    estru.append(0)
                elif palabras[i - 1] == 2 and estru[i - 1] == 0:
                    if random.randint(0, 100) > 50:
                        palabras.append(3)
                        estru.append(1)
                    else:
                        palabras.append(3)
                        estru.append(2)
                elif palabras[i - 1] == 2 and estru[i - 1] == 1:
                    palabras.append(6)
                    estru.append(0)
                elif palabras[i - 1] == 2 and estru[i - 1] == 2:
                    palabras.append(3)
                    estru.append(1)
                elif palabras[i - 1] == 1 and estru[i - 1] == 0:
                    if enume < 2:
                        palabras.append(1)
                        estru.append(0)
                    else:
                        palabras.append(random.randint(1, 7))
                        estru.append(random.randint(0, 3))
                        
                    enume = enume + 1
                else:
                    palabras.append(random.randint(1, 7))
                    estru.append(random.randint(0, 3))

        for i in range(c):
            versos.append(Verso().verso(palabras[i], estru[i], theme).decode('utf8'))

        return versos
