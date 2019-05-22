# -*- coding: utf-8 -*-

from vglobals import Grammar
from vglobals import Exe
from vglobals import Vocabulary

class Tools:

    def conArt(self, sus2):
        fsus = ''
        sub1 = sus2[-1:]
        fem = False
        mas = False

        for efem in Exe.exeFem:
            if sus2 == efem:
                fem = True
                mas = False
        
        for emas in Exe.exeMas:
            if sus2 == efem:
                fem = False
                mas = True

        if sub1 != 's':
            if sub1 != 'a':
                if mas == False:
                    fsus = 'la ' + sus2
                else:
                    fsus = 'el ' + sus2
            elif sub1 == 'o':
                if fem:
                    fsus = 'la ' + sus2
                else:
                    fsus = 'el ' + sus2
            elif sub1 == 'z':
                sub2 = sus2[-2:]
                if sub2 == 'oz':
                    fsus = 'la ' + sus2
                else:
                    fsus = 'el ' + sus2
            else:
                if fem:
                    fsus = 'la ' + sus2
                else:
                    fsus = 'el ' + sus2
        elif sub1 == 's':
            sub2 = sus2[-2:]
            if sub2 == 'as':
                if mas == False:
                    fsus = 'las ' + sus2
                else:
                    fsus = 'los ' + sus2
            elif sub2 == 'os':
                if fem:
                    fsus = 'las ' + sus2
                else:
                    fsus = 'los ' + sus2
            elif sub2 == 'es':
                if fem:
                    fsus = 'las ' + sus2
                else:
                    fsus = 'los ' + sus2
            else:
                fsus = 'el ' + sus2
        else:
            fsus = 'el ' + sus2

        return fsus
