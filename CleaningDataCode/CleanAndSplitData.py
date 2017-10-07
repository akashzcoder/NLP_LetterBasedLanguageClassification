#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Fri Oct  6 19:48:16 2017

@author: akashsingh
"""


#importing the libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#importing about the dataset
dataset = pd.read_csv('TrainingData.csv')
answer=pd.read_csv('Answer.csv')
final = pd.merge(dataset, answer, on='Id')
final[final.Text != '']

Slovak = final[final['Category'] == 0]
Slovak.apply(lambda x: x.astype(str).str.lower())
Slovak.Text = Slovak.Text.str.replace('\d+', '')
French= final[final['Category'] == 1]
French.apply(lambda x: x.astype(str).str.lower())
French.Text = French.Text.str.replace('\d+', '')
Spanish= final[final['Category'] == 2]
Spanish.apply(lambda x: x.astype(str).str.lower())
Spanish.Text = Spanish.Text.str.replace('\d+', '')
German= final[final['Category'] == 3]
German.apply(lambda x: x.astype(str).str.lower())
German.Text = German.Text.str.replace('\d+', '')
Polish= final[final['Category'] == 4]
Polish.apply(lambda x: x.astype(str).str.lower())
Polish.Text = Polish.Text.str.replace('\d+', '')

Slovak.to_csv(r'./Slovak1.csv', index=False, encoding='utf-8')
French.to_csv('./French1.csv', index=False, encoding='utf-8')
Spanish.to_csv('Spanish1.csv', index=False, encoding='utf-8')
German.to_csv('German1.csv', index=False, encoding='utf-8')
Polish.to_csv('Polish1.csv', index=False, encoding='utf-8')

header = ["Text"]
Slovak.to_csv('Slovak_v1.txt', index=False,encoding='utf-8', columns = header)
French.to_csv('French_v1.txt', index=False, encoding='utf-8', columns = header)
Spanish.to_csv('Spanish_v1.txt', index=False, encoding='utf-8', columns = header)
German.to_csv('German_v1.txt', index=False,encoding='utf-8', columns = header)
Polish.to_csv('Polish_v1.txt', index=False, encoding='utf-8', columns = header)




from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(dataset,answer, test_size = 0.20,random_state=1)



