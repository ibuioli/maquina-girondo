# -*- coding: utf-8 -*-

import random
from vglobals import Grammar
from vglobals import Exe
from vglobals import Vocabulary
from tools import Tools

class Verso(object):

	##############################################
	################ ESTRUCTURES #################

	def verso(self, c, r):
		palabras = []
		verso = ''
		theme = random.randint(0, 3)

		if c == 7 and r == 0:  # 7 PALABRAS
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)])
			palabras.append(Tools().adjGenero(palabras[1]))
			if random.randint(0, 100) <= 50:
				palabras.append('o')
			else:
				palabras.append('y')
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)])
			palabras.append(Tools().adjGenero(palabras[5]))
		elif c == 7 and r == 1:
			palabras.append(Tools().esPlural(4))
			palabras.append(Tools().adjGenero(palabras[0]) + ',')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Tools().conArt(Tools().esPlural(3)))
			palabras.append('de')
			palabras.append(Tools().conArt(Tools().esPlural(2)))
		elif c == 7 and r == 2:
			palabras.append(Tools().esPlural(2))
			palabras.append(Tools().adjGenero(palabras[0]))
			palabras.append('se')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append('en')
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))
			palabras.append(Tools().adjGenero(palabras[5]))
		elif c == 7 and r == 3:
			palabras.append('de')
			palabras.append(Vocabulary.cuerpo[random.randint(0, len(Vocabulary.cuerpo) - 1)])
			palabras.append('de')
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)] + ',')
			palabras.append('y')
			palabras.append(Tools().conArt(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)]))
			palabras.append(Tools().adjGenero(palabras[5]))

		############################################################################################

		for palabra in palabras:
			verso = verso + ' ' + palabra

		return verso
