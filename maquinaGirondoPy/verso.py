# -*- coding: utf-8 -*-

import random
from vglobals import Grammar
from vglobals import Exe
from vglobals import Vocabulary
from tools import Tools

class Verso(object):

	##############################################
	################ ESTRUCTURES #################

	def verso(self, c, r, theme):
		palabras = []
		verso = ''

		if c == 7 and r == 0:  # 7 WORDS
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

		if c == 6 and r == 0: # 6 WORDS
			palabras.append('de')
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)])
			palabras.append(Tools().adjGenero(palabras[1]))
			palabras.append('y')
			palabras.append(Vocabulary.prenda[random.randint(0, len(Vocabulary.prenda) - 1)])
			palabras.append(Tools().adjGenero(palabras[4]))
		elif c == 6 and r == 1:
			palabras.append(Vocabulary.persona[random.randint(0, len(Vocabulary.persona) - 1)])
			palabras.append(Tools().conVerb(palabras[0]))
			palabras.append(Vocabulary.prenda[random.randint(0, len(Vocabulary.prenda) - 1)])
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Tools().conArt(Vocabulary.cuerpo[random.randint(0, len(Vocabulary.cuerpo) - 1)]))
			palabras.append(Tools().adjGenero(palabras[4]))
		elif c == 6 and r == 2:
			palabras.append(Tools().esPlural(4))
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Grammar.nums[random.randint(0, len(Grammar.nums) - 1)])
			if palabras[2] == 'mil': 
				palabras.append('millones de')
			else: 
				palabras.append('mil')
				palabras.append(Tools().esPlural(0))
				palabras.append(Tools().adjGenero(palabras[4]))
		elif c == 6 and r == 3:
			palabras.append('cuando')
			palabras.append(Tools().conArt(Tools().esSingular(4)))
			palabras.append(Tools().conVerb(palabras[1]))
			palabras.append(Tools().conArt(Tools().temaLugar(theme)) + ',')
			palabras.append('es')
			if random.randint(0, 100) < 50:
				palabras.append('necesario')
			else:
				palabras.append('obligatorio')

		if c == 5 and r == 0:  # 5 WORDS
			palabras.append('les')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append(Tools().esPlural(4))
			palabras.append('a')
			palabras.append(Tools().conArt(Vocabulary.persona[random.randint(0, len(Vocabulary.persona) - 1)]))
		elif c == 5 and r == 1: 
			palabras.append(Tools().conArt(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)]))
			palabras.append('se')
			palabras.append(Tools().conVerb(palabras[0]))
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Tools().conArt(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)]))
		elif c == 5 and r == 2: 
			palabras.append(Grammar.nums[random.randint(0, len(Grammar.nums) - 1)])
			palabras.append(Tools().esPlural(2))
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append('por')
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))
		elif c == 5 and r == 3: 
			palabras.append('en')
			palabras.append(Tools().conArt(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)]))
			palabras.append('que')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))

		if c == 4 and r == 0:  # 4 WORDS
			palabras.append(Tools().esPlural(2))
			palabras.append(Tools().adjGenero(palabras[0]))
			palabras.append('de')
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)])
		elif c == 4 and r == 1:
			palabras.append('se')
			palabras.append(Tools().conVerb(palabras[0]) + 'n')
			palabras.append(Grammar.prep[random.randint(0, len(Grammar.prep) - 1)])
			palabras.append(Tools().conArt(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)]))
		elif c == 4 and r == 2:
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)])
			palabras.append(Tools().adjGenero(palabras[0]) + '.')
			palabras.append(Vocabulary.lugar[random.randint(0, len(Vocabulary.lugar) - 1)].capitalize())
			palabras.append(Tools().adjGenero(palabras[2]))
		elif c == 4 and r == 3: 
			palabras.append(Tools().conArt(Tools().esPlural(2)))
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append('con')
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))
     
		if c == 3 and r == 0:  # 3 WORDS
			palabras.append(Vocabulary.inf[random.randint(0, len(Vocabulary.inf) - 1)] + 'se')
			if random.randint(0, 100) <= 50: 
				palabras.append('a')
			else:
				palabras.append('en')

			if palabras[1] == 'en': 
				palabras.append(Tools().conArt(Tools().temaLugar(theme)))
			else:
				palabras.append(Tools().conArt(Tools().esPlural(2)))

		elif c == 3 and r == 1: 
			palabras.append('están en')
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))
			palabras.append(Tools().adjGenero(palabras[1]))
		elif c == 3 and r == 2: 
			palabras.append('no')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])
			palabras.append(Tools().conArt(Tools().esPlural(0)))
		elif c == 3 and r == 3: 
			palabras.append(Tools().conArt(Tools().temaLugar(theme)))
			palabras.append(Tools().adjGenero(palabras[0]) + ',')
			palabras.append(Tools().adjGenero(palabras[0]) + ',')

		if c == 2 and r == 0:  # 2 WORDS
			palabras.append('sus')
			palabras.append(Tools().esPlural(4))
		elif c == 2 and r == 1:
			palabras.append('su')
			palabras.append(Tools().esSingular(4))
		elif c == 2 and r == 2: 
			palabras.append(Grammar.nums[random.randint(0, len(Grammar.nums) - 1)])
			palabras.append(Tools().esPlural(random.randint(0, 4)))
		elif c == 2 and r == 3: 
			palabras.append('no')
			palabras.append(Vocabulary.conj1[random.randint(0, len(Vocabulary.conj1) - 1)])

		if c == 1 and r == 0:
			palabras.append(Vocabulary.resto[random.randint(0, len(Vocabulary.resto) - 1)] + ',')
		elif c == 1 and r == 1: 
			palabras.append(Vocabulary.inf[random.randint(0, len(Vocabulary.inf) - 1)] + 'se')
		elif c == 1 and r == 2:
			palabras.append(Vocabulary.prenda[random.randint(0, len(Vocabulary.prenda) - 1)])
		elif c == 1 and r == 3: 
			palabras.append(Vocabulary.prenda[random.randint(0, len(Vocabulary.prenda) - 1)])

		############################################################################################

		for palabra in palabras:
			verso = verso + ' ' + palabra

		return verso
