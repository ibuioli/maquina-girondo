# -*- coding: utf-8 -*-

import random
from vglobals import Grammar
from vglobals import Exe
from vglobals import Vocabulary

class Tools:

    # ADD ART
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

    # CONJ VERB
    def conVerb(self, sus2):
        sub1 = sus2[-1:]
        verb = ''

        if sub1 == 's':
            verb = Vocabulary.conj1[random.randint(1, len(Vocabulary.conj1))]
        else:
            verb = Vocabulary.conj2[random.randint(1, len(Vocabulary.conj2))]
        
        return verb

    # PLURAL
    def esPlural(self, caso):
        sus2 = ''

        if caso == 0:
            sus2 = Vocabulary.cuerpo[random.randint(1, len(Vocabulary.cuerpo))]
        elif caso == 1:
            sus2 = Vocabulary.lugar[random.randint(1, len(Vocabulary.lugar))]
        elif caso == 2:
            sus2 = Vocabulary.persona[random.randint(1, len(Vocabulary.persona))]
        elif caso == 3:
            sus2 = Vocabulary.prenda[random.randint(1, len(Vocabulary.prenda))]
        else:
            sus2 = Vocabulary.resto[random.randint(1, len(Vocabulary.resto))]
        
        sub1 = sus2[-1:]

        if sub1 == 's':
            return sus2
        else:
            return self.esPlural(caso)

    # PLURAL
    def esSingular(self, caso):
        sus2 = ''

        if caso == 0:
            sus2 = Vocabulary.cuerpo[random.randint(1, len(Vocabulary.cuerpo))]
        elif caso == 1:
            sus2 = Vocabulary.lugar[random.randint(1, len(Vocabulary.lugar))]
        elif caso == 2:
            sus2 = Vocabulary.persona[random.randint(1, len(Vocabulary.persona))]
        elif caso == 3:
            sus2 = Vocabulary.prenda[random.randint(1, len(Vocabulary.prenda))]
        else:
            sus2 = Vocabulary.resto[random.randint(1, len(Vocabulary.resto))]
        
        sub1 = sus2[-1:]

        if sub1 != 's':
            return sus2
        else:
            return self.esSingular(caso)

    # THEME
    def temaLugar(self, caso):
        nlugar = ''

        if caso == 0: # calle
            nlugar = Vocabulary.lugar[random.randint(1, 20)]
        elif caso == 1: # noche
            nlugar = Vocabulary.lugar[random.randint(20, 33)]
        elif caso == 2: # plaza
            nlugar = Vocabulary.lugar[random.randint(33, 46)]
        elif caso == 3: # mar
            nlugar = Vocabulary.lugar[random.randint(46, len(Vocabulary.lugar))]

        return nlugar
